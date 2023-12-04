import _ from 'loadsh'
const items = [1,2,3,[2,[4]],[[[[]]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
null