const parser = require('comment-parser')
const fs = require('fs')

const baseUrl = __dirname + '/../../RPGJS/'
const destination  = __dirname + '/../docs/api/'

const open = function(path) {
    return fs
    .readdirSync(baseUrl + path)
    .map(file => `${path}/${file}`)
}

const files = [
    ...open('packages/database/src'),
    ...open('packages/server/src/Player')
]

let md = {}
for (let file of files) {
    const code = fs.readFileSync(baseUrl + file, 'utf-8')
    const comments = parser(code, {
        trim: false
    })
    for (let comment of comments) {
        const { tags, description } = comment
        const tag = name => tags.find(tag => tag.tag == name)
        const memberofs = tags.filter(tag => tag.tag == 'memberof')
        for (let memberof of memberofs) {  
            if (!md[memberof.name]) md[memberof.name] = ''
            md[memberof.name] += `
---
`
        if (tag('title')) {
md[memberof.name] += 
`### ${tag('title').name} ${tag('title').description}`
        }
       
        if (tag('prop')) {
            md[memberof.name] += 
`
- **Property**: \`${tag('prop').name}\`
- **Type**: \`${tag('prop').type}\`
- **Optional**: \`${tag('prop').optional}\``
        }

        if (tag('readonly')) {
            md[memberof.name] += 
`
- **Read Only**`
        }

        if (tag('method')) {
            md[memberof.name] += 
`
- **Method**: \`${tag('method').name}\``
        }

        if (tag('param')) {
            md[memberof.name] += 
`
- **Arguments**:`
            for(let tag of tags) {
                if (tag.tag != 'param') continue
                md[memberof.name] += 
`
    - \`{${tag.type}}\` \`${tag.name}\`. ${tag.description} (Optional: \`${tag.optional}\`)`
            }
        }

        if (tag('throws')) {
            md[memberof.name] += 
`
- **Exceptions**:`
            for(let tag of tags) {
                if (tag.tag != 'throws') continue
                md[memberof.name] += 
`
    - \`{${tag.type}}\` \`${tag.name}\`. ${tag.description}`
            }
        }

        if (tag('returns')) {
md[memberof.name] += `
- **Return**: \`${tag('returns').type}\`  ${tag('returns').description}`          
        }

        if (tag('example')) {
            md[memberof.name] += `
- **Example**: 
${tag('example').description}`          
        }

       if (tag('default')) {
        md[memberof.name] += `
- **Default**: \`${tag('default').name}\``
       }
       md[memberof.name] += 
` 
- **Usage**:

${description}
`
        }
    }
   
}

for (let key in md) {
    fs.writeFileSync(destination + key + '.md', md[key], 'utf-8')
}