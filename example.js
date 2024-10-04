/*
 * Data
*/
const mtrLines = {
    TML: {
        text: '屯馬線',
        color: '#8d6019',
        sta: [
            { code: 'WKS', name: 'Wu Kai Sha' },
            { code: 'MOS', name: 'Ma On Shan' },
            { code: 'HEO', name: 'Heng On' },
            { code: 'TSH', name: 'Tai Shui Hang' },
            { code: 'SHM', name: 'Shek Mun' },
            { code: 'CIO', name: 'City One' },
            { code: 'STW', name: 'Sha Tin Wai' },
            { code: 'CKT', name: 'Che Kung Temple' },
            { code: 'TAW', name: 'Tai Wai' },
            { code: 'HIK', name: 'Hin Keng' },
            { code: 'DIH', name: 'Diamond Hill' },
            { code: 'KAT', name: 'Kai Tak' },
            { code: 'SUW', name: 'Sung Wong Toi' },
            { code: 'TKW', name: 'To Kwa Wan' },
            { code: 'HOM', name: 'Ho Man Tin' },
            { code: 'HUH', name: 'Hung Hom' },
            { code: 'ETS', name: 'East Tsim Sha Tsui' },
            { code: 'AUS', name: 'Austin' },
            { code: 'NAC', name: 'Nam Cheong' },
            { code: 'MEF', name: 'Mei Foo' },
            { code: 'TWW', name: 'Tsuen Wan West' },
            { code: 'KSR', name: 'Kam Sheung Road' },
            { code: 'YUL', name: 'Yuen Long' },
            { code: 'LOP', name: 'Long Ping' },
            { code: 'TIS', name: 'Tin Shui Wai' },
            { code: 'SIH', name: 'Siu Hong' },
            { code: 'TUM', name: 'Tuen Mun' },
        ],
        up: ['TUM'],
        down: ['WKS'],
    },
}
const apiUrl = 'https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php'

/*
 * Function
*/
main()

/* 同步 fetch API */
async function synchronous() {
    const lineCode = 'TML'

    let fetchData = []
    const stations = mtrLines[lineCode].sta
    
    for (const index in stations) {
        const station = stations[index]
        const data = await fetchApiData(lineCode, station.code)
        fetchData.push({
            ...data,
            name: station.name,
        })
    }
    return fetchData
}

/* 異步 fetch API */
async function asynchronous() {
    const lineCode = 'TML'

    const fetchTasks = mtrLines[lineCode].sta.map(async ({ code, name }) => {
        const data = await fetchApiData(lineCode, code)
        return {
            ...data,
            name,
        }
    })
    const fetchData = await Promise.all(fetchTasks)
    return fetchData
}

function main() {
    // synchronous
    document.querySelector('[data-method="synchronous"]').addEventListener('click', event => {
        // show github code
        document.querySelector('[data-type="asynchronous"]').classList.add('hide')
        document.querySelector('[data-type="synchronous"]').classList.remove('hide')

        selectLine(event, synchronous)
    })

    // asynchronous
    document.querySelector('[data-method="asynchronous"]').addEventListener('click', event => {
        // show github code
        document.querySelector('[data-type="synchronous"]').classList.add('hide')
        document.querySelector('[data-type="asynchronous"]').classList.remove('hide')

        selectLine(event, asynchronous)
    })
}

async function selectLine(event, fetchApiFunc) {
    const lineElem = event.currentTarget
    const lineCode = lineElem.dataset.lineCode  // get data-line-name value
    const line = mtrLines[lineCode] // line object
    const directions = ['up', 'down']
    const cleanFloor = () => document.querySelector('.trains-container').textContent = null

    document.querySelector('.line.active')?.classList.remove('active')
    lineElem.classList.add('active')
    
    /* clean floor first */
    // clean for show loading
    cleanFloor()
    document.querySelector('.loading').classList.remove('hide')

    /* step 1: fetch all data from api */
    const tStart = Date.now()
    const fetchData = await fetchApiFunc()
    const tEnd = Date.now()

    const timeDifferent = (tEnd - tStart)
    document.querySelector(`.time-used span`).textContent = timeDifferent

    /* step 2: format data */
    const dataset = []
    fetchData.forEach(data => {
        directions.forEach(direction => {
            const key = direction.toUpperCase()
            if (!!data[key]) {
                dataset.push({
                    name: data.name,
                    direction,
                    ...data[key][0],
                })
            }
        })
    })
    fetchData.sort((a, b) => new Date(b.curr_time) - new Date(a.curr_time))

    /* step 3: render data to UI */
    // clean again to make sure the floor dont be affected by the last API
    cleanFloor()
    // remove loading
    document.querySelector('.loading').classList.add('hide')

    // create content element
    directions.forEach(direction => {
        const elem = cloneFromTemplate('template-trains-direction')
        elem.dataset.direction = direction
        elem.style.setProperty('--color', line.color)

        // set title
        const destinations = line[direction].map(station => getStationName(lineCode, station))
        elem.querySelector(`.title`).textContent = `往 ${destinations.join(' / ')} 方向`

        document.querySelector('.trains-container').appendChild(elem, null)
    })

    // set the last updated time
    document.querySelector('.last-updated-time').textContent = `最後更新時間: ${fetchData[0].curr_time}`

    // render train info
    dataset.forEach(data => renderTrain(data, lineCode, line.color))
}

function renderTrain(data, lineCode, color) {
    const elem = cloneFromTemplate('template-train')

    elem.style.setProperty('--color', color)
    elem.querySelector('.name').textContent = data.name
    elem.querySelector('.destination span').textContent = getStationName(lineCode, data.dest)
    elem.querySelector('.platform span').textContent = data.plat

    const time = new Date(data.time)
    elem.querySelector('.time span').textContent = `${time.getHours()}:${String(time.getMinutes()).padStart(2, '0')}`

    document.querySelector(`[data-direction=${data.direction}] .trains`).appendChild(elem, null)
}

/*
 * Heleper
*/
function getStationName(line, code) {
    const matched = mtrLines[line].sta.find(sta => sta.code === code)
    return matched?.name || ''
}

function cloneFromTemplate(templateId) {
    const template = document.getElementById(templateId)
    return template.content.cloneNode(true).children[0]
}

async function fetchApiData(line, station) {
    try {
        const endpoint = `${apiUrl}?line=${line}&sta=${station}`
        let response = await fetch(endpoint)
        response = await response.json()
        if (response.status == 0) {
            // handle 429 or other not successful
            console.log('fetch error:', { line, station })
            return null
        }
        return response.data[`${line}-${station}`]
    } catch (err) {
        // handle 500
        return null
    }
}