import Mock from 'mockjs'

// let Random = Mock.Random
const data = Mock.mock({
    'lists|50': [{
        'id|+1': 1,
        'name': '@cname',
        'children|1-50': [{
            'id|+1': 1,
            'name': '@cname',
            'children|1-30': [{
                'id|+1': 1,
                'name': '@cname'
                }]
        }]
    }]
})

export default data