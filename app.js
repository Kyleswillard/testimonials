const testArray = [
    {name: 'Mike',
    quote: 'Amazing service!',
    date: '1/20/2019' },
    {name: 'Bob',
    quote: 'Took the time!',
    date: '5/7/2019'},
    {name: 'Tim', 
    quote: 'Made my day!',
    date: '10/8/2019'},
    {name: 'Tina',
    quote: 'awesome place!', 
    date: '12/30/2019'},
    {name: 'Jack',
    quote: 'Made it work.',
    date: '3/15/2020'}
];

for(let name of testArray) {
    document.getElementById('cust_name').innerHTML += `Customer:  ${name.name}<br> Quote: ${name.quote}<br> Date: ${name.date}<br><br><hr><br>`
}