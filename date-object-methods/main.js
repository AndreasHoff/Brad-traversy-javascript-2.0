d = new Date();
x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getMonth();

x = d.getDate();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Europe/Copenhagen',
    timeZoneName: 'short',
    hour12: false,
});

console.log(x);
