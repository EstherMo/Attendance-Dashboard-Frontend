# Moishe House Attendance Dashboard

This dashboard was built for the non-profit organization called Moishe House. Volunteers at Moishe House host 8+ events for adults in their 20s & 30s in order to build community, explore Jewish culture, organize volunteering efforts, promote diversity, highlight local community initiatives and more.  

Having a central app to display upcoming events and attendance information makes it easier for volunteers to plan for the future, keep track of progress and advertise for upcoming programs. 

## Monolithic Service
This app primarily queries the tables with program and participant information. These tables have a many to many relationship and is simpler to implement with a monolithic app as they refer to each other frequently. As more features are added, a microservice might be a better approach in order to make it more scalable.

## More Features Coming
- A participant view to be able to check off which programs each visitor attended
- Ability to add and edit participant info
- More interesting data points for the dashboard such as total participants since the beginning, total people per event category, total per year & per month, average times the same participants return.. etc




