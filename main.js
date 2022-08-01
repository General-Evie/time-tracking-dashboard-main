document.getElementById('daily').addEventListener('click', daily)
document.getElementById('weekly').addEventListener('click', weekly)
document.getElementById('monthly').addEventListener('click', monthly)
 
let data; 


fetch("./data.json")
.then(function(response) 
{
     return response.json();
})
.then(function(jsondata) 
{
    data = jsondata
})

window.onload = function()
{
    daily();
}

function display()
{
    document.querySelectorAll('.daily-card').forEach(elem => elem.style.display = 'none')
    document.querySelectorAll('.weekly-card').forEach(elem => elem.style.display = 'none')
    document.querySelectorAll('.monthly-card').forEach(elem => elem.style.display = 'none')
    document.getElementById('daily').classList.remove('highlight')
    document.getElementById('weekly').classList.remove('highlight')
    document.getElementById('monthly').classList.remove('highlight')
}

function daily() 
{ 
    
    display();
    document.querySelectorAll('.daily-card').forEach(elem => elem.style.display = 'block')
    document.getElementById('daily').classList.add('highlight')
    document.querySelector('.daily-work').textContent = JSON.stringify(data[0].timeframes.daily.current) + 'hrs'
    document.querySelector('.daily-work-prev').textContent = JSON.stringify(data[0].timeframes.daily.previous) + 'hrs'
    document.querySelector('.daily-play').textContent = JSON.stringify(data[1].timeframes.daily.current) + 'hrs'
    document.querySelector('.daily-play-prev').textContent = JSON.stringify(data[1].timeframes.daily.previous) + 'hrs'   
    document.querySelector('.daily-study').textContent = JSON.stringify(data[2].timeframes.daily.current) + 'hrs'
    document.querySelector('.daily-study-prev').textContent = JSON.stringify(data[2].timeframes.daily.previous) + 'hrs'
    document.querySelector('.daily-exercise').textContent = JSON.stringify(data[3].timeframes.daily.current) + 'hrs'
    document.querySelector('.daily-exercise-prev').textContent = JSON.stringify(data[3].timeframes.daily.previous) + 'hrs'    
    document.querySelector('.daily-social').textContent = JSON.stringify(data[4].timeframes.daily.current) + 'hrs'
    document.querySelector('.daily-social-prev').textContent = JSON.stringify(data[4].timeframes.daily.previous) + 'hrs'
    document.querySelector('.daily-self').textContent = JSON.stringify(data[5].timeframes.daily.current) + 'hrs'
    document.querySelector('.daily-self-prev').textContent = JSON.stringify(data[5].timeframes.daily.previous) + 'hrs'

}

function weekly() 
{ 
    display();
    document.querySelectorAll('.weekly-card').forEach(elem => elem.style.display = 'block')
    document.getElementById('weekly').classList.add('highlight')
    document.querySelector('.weekly-work').textContent = JSON.stringify(data[0].timeframes.weekly.current) + 'hrs'
    document.querySelector('.weekly-work-prev').textContent = JSON.stringify(data[0].timeframes.weekly.previous) + 'hrs'
    document.querySelector('.weekly-play').textContent = JSON.stringify(data[1].timeframes.weekly.current) + 'hrs'
    document.querySelector('.weekly-play-prev').textContent = JSON.stringify(data[1].timeframes.weekly.previous) + 'hrs'    
    document.querySelector('.weekly-study').textContent = JSON.stringify(data[2].timeframes.weekly.current) + 'hrs'
    document.querySelector('.weekly-study-prev').textContent = JSON.stringify(data[2].timeframes.weekly.previous) + 'hrs'
    document.querySelector('.weekly-exercise').textContent = JSON.stringify(data[3].timeframes.weekly.current) + 'hrs'
    document.querySelector('.weekly-exercise-prev').textContent = JSON.stringify(data[3].timeframes.weekly.previous) + 'hrs'    
    document.querySelector('.weekly-social').textContent = JSON.stringify(data[4].timeframes.weekly.current) + 'hrs'
    document.querySelector('.weekly-social-prev').textContent = JSON.stringify(data[4].timeframes.weekly.previous) + 'hrs'
    document.querySelector('.weekly-self').textContent = JSON.stringify(data[5].timeframes.weekly.current) + 'hrs'
    document.querySelector('.weekly-self-prev').textContent = JSON.stringify(data[5].timeframes.weekly.previous) + 'hrs'

}

function monthly() 
{ 
    display();
    document.querySelectorAll('.monthly-card').forEach(elem => elem.style.display = 'block')
    document.getElementById('monthly').classList.add('highlight')
    document.querySelector('.monthly-work').textContent = JSON.stringify(data[0].timeframes.monthly.current) + 'hrs'
    document.querySelector('.monthly-work-prev').textContent = JSON.stringify(data[0].timeframes.monthly.previous) + 'hrs'
    document.querySelector('.monthly-play').textContent = JSON.stringify(data[1].timeframes.monthly.current) + 'hrs'
    document.querySelector('.monthly-play-prev').textContent = JSON.stringify(data[1].timeframes.monthly.previous) + 'hrs'    
    document.querySelector('.monthly-study').textContent = JSON.stringify(data[2].timeframes.monthly.current) + 'hrs'
    document.querySelector('.monthly-study-prev').textContent = JSON.stringify(data[2].timeframes.monthly.previous) + 'hrs'
    document.querySelector('.monthly-exercise').textContent = JSON.stringify(data[3].timeframes.monthly.current) + 'hrs'
    document.querySelector('.monthly-exercise-prev').textContent = JSON.stringify(data[3].timeframes.monthly.previous) + 'hrs'    
    document.querySelector('.monthly-social').textContent = JSON.stringify(data[4].timeframes.monthly.current) + 'hrs'
    document.querySelector('.monthly-social-prev').textContent = JSON.stringify(data[4].timeframes.monthly.previous) + 'hrs'
    document.querySelector('.monthly-self').textContent = JSON.stringify(data[5].timeframes.monthly.current) + 'hrs'
    document.querySelector('.monthly-self-prev').textContent = JSON.stringify(data[5].timeframes.monthly.previous) + 'hrs'

}




