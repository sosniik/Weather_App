export function timeStamps(dt) {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    let day = (new Date(dt * 1000)).getDay()
    day = day - 1
    if (typeof days[day] === 'undefined') {
        day = 6
    }
    return days[day]
}