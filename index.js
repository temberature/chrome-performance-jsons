const fs = require('fs-extra')
const loadJsonFile = require('load-json-file')
const writeJsonFile = require('write-json-file');

const events = loadJsonFile.sync('./Profile-20181130T132652.json')

const DefaultCategories = "-*,devtools.timeline,v8.execute,disabled-by-default-devtools.timeline,blink.console,blink.user_timing,disabled-by-default-devtools.timeline.stack".split(',')
const visibleEvents = events.filter(event => !['GPUTask', 'LatencyInfo.Flow', 'RasterTask'].includes(event.name) && event.cat.split(',').filter(cat => DefaultCategories.includes(cat)).length > 0).sort((a, b) => a.ts - b.ts)

let fileContent = '['

visibleEvents.forEach(event => fileContent += JSON.stringify(event) + ',\n')

fileContent += ']'

fs.writeFileSync('./visibleEvents.json', fileContent)

