/*
 * Data
*/
const mtrLines = {
    KTL: {
        text: '觀塘線',
        color: '#7ed957',
        sta: [
            { code: 'WHA', name: 'Whampoa' },
            { code: 'HOM', name: 'Ho Man Tin' },
            { code: 'YMT', name: 'Yau Ma Tei' },
            { code: 'MOK', name: 'Mong Kok' },
            { code: 'PRE', name: 'Prince Edward' },
            { code: 'SKM', name: 'Shek Kip Mei' },
            { code: 'KOT', name: 'Kowloon Tong' },
            { code: 'LOF', name: 'Lok Fu' },
            { code: 'WTS', name: 'Wong Tai Sin' },
            { code: 'DIH', name: 'Diamond Hill' },
            { code: 'CHH', name: 'Choi Hung' },
            { code: 'KOB', name: 'Kowloon Bay' },
            { code: 'NTK', name: 'Ngau Tau Kok' },
            { code: 'KWT', name: 'Kwun Tong' },
            { code: 'LAT', name: 'Lam Tin' },
            { code: 'YAT', name: 'Yau Tong' },
            { code: 'TIK', name: 'Tiu Keng Leng' },
        ],
        up: ['TIK'],
        down: ['WHA'],
    },
    ISL: {
        text: '港島線',
        color: '#004aad',
        sta: [
            { code: 'KET', name: 'Kennedy Town' },
            { code: 'HKU', name: 'HKU' },
            { code: 'SYP', name: 'Sai Ying Pun' },
            { code: 'SHW', name: 'Sheung Wan' },
            { code: 'CEN', name: 'Central' },
            { code: 'ADM', name: 'Admiralty' },
            { code: 'WAC', name: 'Wan Chai' },
            { code: 'CAB', name: 'Causeway Bay' },
            { code: 'TIH', name: 'Tin Hau' },
            { code: 'FOH', name: 'Fortress Hill' },
            { code: 'NOP', name: 'North Point' },
            { code: 'QUB', name: 'Quarry Bay' },
            { code: 'TAK', name: 'Tai Koo' },
            { code: 'SWH', name: 'Sai Wan Ho' },
            { code: 'SKW', name: 'Shau Kei Wan' },
            { code: 'HFC', name: 'Heng Fa Chuen' },
            { code: 'CHW', name: 'Chai Wan' },
        ],
        up: ['CHW'],
        down: ['KET'],
    },
    TWL: {
        text: '荃灣線',
        color: '#ff3131',
        sta: [
            { code: 'CEN', name: 'Central' },
            { code: 'ADM', name: 'Admiralty' },
            { code: 'TST', name: 'Tsim Sha Tsui' },
            { code: 'JOR', name: 'Jordan' },
            { code: 'YMT', name: 'Yau Ma Tei' },
            { code: 'MOK', name: 'Mong Kok' },
            { code: 'PRE', name: 'Price Edward' },
            { code: 'SSP', name: 'Sham Shui Po' },
            { code: 'CSW', name: 'Cheung Sha Wan' },
            { code: 'LCK', name: 'Lai Chi Kok' },
            { code: 'MEF', name: 'Mei Foo' },
            { code: 'LAK', name: 'Lai King' },
            { code: 'KWF', name: 'Kwai Fong' },
            { code: 'KWH', name: 'Kwai Hing' },
            { code: 'TWH', name: 'Tai Wo Hau' },
            { code: 'TSW', name: 'Tsuen Wan' },
        ],
        up: ['TSW'],
        down: ['CEN'],
    },
    SIL: {
        text: '南港島線',
        color: '#cbcd09',
        sta: [
            { code: 'ADM', name: 'Admiralty' },
            { code: 'OCP', name: 'Ocean Park' },
            { code: 'WCH', name: 'Wong Chuk Hang' },
            { code: 'LET', name: 'Lei Tung' },
            { code: 'SOH', name: 'South Horizons' },
        ],
        up: ['SOH'],
        down: ['ADM'],
    },
    TCL: {
        text: '東涌線',
        color: '#f6943d',
        sta: [
            { code: 'HOK', name: 'Hong Kong' },
            { code: 'KOW', name: 'Kowloon' },
            { code: 'OLY', name: 'Olympic' },
            { code: 'NAC', name: 'Nam Cheong' },
            { code: 'LAK', name: 'Lai King' },
            { code: 'TSY', name: 'Tsing Yi' },
            { code: 'SUN', name: 'Sunny Bay' },
            { code: 'TUC', name: 'Tung Chung' },
        ],
        up: ['TUC'],
        down: ['HOK'],
    },
    EAL: {
        text: '東鐵線',
        color: '#5ce1e6',
        sta: [
            { code: 'ADM', name: 'Admiralty' },
            { code: 'EXC', name: 'Exhibition Centre' },
            { code: 'HUH', name: 'Hung Hom' },
            { code: 'MKK', name: 'Mong Kok East' },
            { code: 'KOT', name: 'Kowloon Tong' },
            { code: 'TAW', name: 'Tai Wai' },
            { code: 'SHT', name: 'Sha Tin' },
            { code: 'FOT', name: 'Fo Tan' },
            { code: 'RAC', name: 'Racecourse' },
            { code: 'UNI', name: 'University' },
            { code: 'TAP', name: 'Tai Po Market' },
            { code: 'TWO', name: 'Tai Wo' },
            { code: 'FAN', name: 'Fanling' },
            { code: 'SHS', name: 'Sheung Shui' },
            { code: 'LOW', name: 'Lo Wu' },
            { code: 'LMC', name: 'Lok Ma Chau' },
        ],
        up: ['LOW', 'LMC'],
        down: ['ADM'],
    },
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
    AEL: {
        text: '機場快線',
        color: '#3d9ea0',
        sta: [
            { code: 'HOK', name: 'Hong Kong' },
            { code: 'KOW', name: 'Kowloon' },
            { code: 'TSY', name: 'Tsing Yi' },
            { code: 'AIR', name: 'Airport' },
            { code: 'AWE', name: 'AsiaWorld Expo' },
        ],
        up: ['AIR', 'AWE'],
        down: ['HOK'],
    },
    TKL: {
        text: '將軍澳線',
        color: '#8d45ab',
        sta: [
            { code: 'NOP', name: 'North Point' },
            { code: 'QUB', name: 'Quarry Bay' },
            { code: 'YAT', name: 'Yau Tong' },
            { code: 'TIK', name: 'Tiu Keng Leng' },
            { code: 'TKO', name: 'Tseung Kwan O' },
            { code: 'LHP', name: 'LOHAS Park' },
            { code: 'HAH', name: 'Hang Hau' },
            { code: 'POA', name: 'Po Lam' },
        ],
        up: ['POA', 'LHP'],
        down: ['NOP'],
    },
}
const apiUrl = 'https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php'

/*
 * Function
*/
renderLines()

function renderLines() {
    const area = document.querySelector('.lines')

    for (const lineCode in mtrLines) {
        const line = mtrLines[lineCode] // line object

        const elem = cloneFromTemplate('template-line')

        // set value
        elem.querySelector('span').textContent = line.text
        elem.style.setProperty('--color', line.color)
        elem.dataset.lineCode = lineCode    // set data-line-name value
        elem.addEventListener('click', selectLine)

        area.appendChild(elem, null)
    }
}

async function selectLine(event) {
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
    const fetchTasks = line.sta.map(async ({ code, name }) => {
        const data = await fetchApiData(lineCode, code)
        return {
            ...data,
            name,
        }
    })
    const fetchData = await Promise.all(fetchTasks)

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