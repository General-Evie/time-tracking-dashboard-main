document.getElementsByClassName('weekly-card')[0].style.display = 'none';
document.getElementsByClassName('monthly-card')[0].style.display = 'none';

function hideAll()
{
  document.getElementsByClassName('daily-card')[0].style.display = 'none';
  document.getElementsByClassName('weekly-card')[0].style.display = 'none';
  document.getElementsByClassName('monthly-card')[0].style.display = 'none';
}

function showDaily()
{
  hideAll();
  document.getElementsByClassName('daily-card')[0].style.display = 'block';
} 
function showWeekly()
{
  hideAll();
  document.getElementsByClassName('weekly-card')[0].style.display = 'block';
} 
function showMonthly()
{
  hideAll();
  document.getElementsByClassName('monthly-card')[0].style.display = 'block';
} 
