//========== DATE
// const hoy = new Date()
// console.log(`El día de hoy es ${hoy}`)
// console.log(`El día de hoy es ${hoy.getDay()}`)
// console.log(`El mes de hoy es ${hoy.getMonth()}`)
// console.log(`El año de hoy es ${hoy.getFullYear()}`)
// console.log(hoy.toDateString())
// console.log(hoy.toLocaleString())
// console.log(hoy.toLocaleDateString())
// console.log(hoy.toTimeString())

// const hoy = new Date()
// const hoyFormatoFecha = hoy.toLocaleDateString()
// const hoyFormatoHorario = hoy.toTimeString()
// console.log(hoyFormatoFecha)
// console.log(hoyFormatoHorario)

// let fechaActual = document.getElementById('containerDate');
// fechaActual.innerHTML = `Current Time:  ${hoyFormatoFecha} | ${hoyFormatoHorario}`
// fechaActual.className = 'containerDateStyle'


//========== LUXON DATE
const { DateTime } = luxon;

const dt = DateTime.fromObject(
    { day: 17, hour: 00, month: 12 },
    { zone: 'America/Buenos_Aires', numberingSystem: 'beng' },
);
console.log(dt.toString());

// const now = DateTime.now()
// console.log(`Hoy es el día ${now.weekday} de la semana y siendo el mes ${now.month} hay ${now.daysInMonth} dias`)
// console.log(`La zona horaria es ${now.zoneName}`)
// console.log(`${now.toLocaleString()}`)
// console.log(`${now.toLocaleString(DateTime.DATE_SHORT)}`)

const now = DateTime.now()
const nowFormatoFecha = now.toLocaleString(DateTime.DATE_SHORT);
const nowFormatoHorario = now.toLocaleString(DateTime.TIME_SIMPLE);
const nowFormatoEnglish = now.setLocale('en').toLocaleString(DateTime.DATETIME_FULL);

const newFormat = { ...DateTime.DATETIME_FULL, weekday: 'long', day: 'numeric' };
const newFormatNew = now.setLocale('en').toLocaleString(newFormat);

let nowFecha = document.getElementById('containerDate')
// nowFecha.innerHTML = `Current Time: ${nowFormatoFecha} - ${nowFormatoHorario}`
nowFecha.innerHTML = `Current Time: ${newFormatNew}`
nowFecha.className = 'containerDateStyle'


//========== LUXON DURATION
// const { Duration } = luxon;

// const date = DateTime.now();
// const dur = Duration.fromObject({ hours: 3, minutes: 15 });

// console.log(dur.hours)
// console.log(dur.minutes)

// console.log(date.toLocaleString(DateTime.DATETIME_SHORT))

// const suma = date.plus(dur)
// console.log(suma.toLocaleString(DateTime.DATETIME_SHORT))

// const resta = date.minus(dur)
// console.log(resta.toLocaleString(DateTime.DATETIME_SHORT))


//========== LUXON INTERVAL
// const { Interval } = luxon;

// const ahora = DateTime.now()
// const later = DateTime.local(2022, 1, 26)
// const i = Interval.fromDateTimes(ahora, later)

// console.log(i.length('days'))
// console.log(i.length('hours'))
// console.log(i.length('minutes'))