/// <reference path="../pb_data/types.d.ts" />

migrate((app) => {
  const records = app.findAllRecords("_pb_users_auth_")

  records.forEach((record) => {
    record.set("username", generateStringByPattern())
    app.save(record)
  })
}, (app) => {
  // add down queries...
})

function generateStringByPattern(prefix = 'user', digitCount = 6) {
    if (digitCount <= 0) {
        throw new Error('Digit count must be positive');
    }
    
    const randomDigits = Array.from({length: digitCount}, () => 
        Math.floor(Math.random() * 10)
    ).join('');
    
    return `${prefix}${randomDigits}`;
}
