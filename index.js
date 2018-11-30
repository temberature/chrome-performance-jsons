const fs = require('fs-extra')
const loadJsonFile = require('load-json-file')
const writeJsonFile = require('write-json-file');

const events = loadJsonFile.sync('./Profile-20181130T112110.json')

const visibleEvents = events.filter(event => event.cat.startsWith('devtools.timeline')).sort((a, b) => a.ts - b.ts)

let fileContent = '['

visibleEvents.forEach(event => fileContent += JSON.stringify(event) + ',\n')

fileContent += ']'

fs.writeFileSync('./visibleEvents.json', fileContent)

