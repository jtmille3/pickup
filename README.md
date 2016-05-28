#Pickup App

This app provides an interface for players to sign up for pick up games and get the latest news about the fields they play on.

##Project Setup

### Prerequesites
 * npm and node (https://nodejs.org/en/)
 * git

### Setup
 * git clone https://github.com/jtmille3/pickup
 * cd pickup
 * npm install
 * npm start (this also starts the "app" and opens the page in your browser)

## Developing

Jeff will put some stuff here about working on the app :D

TODO:
Notifications per activity (Warn, Info, Success, Danger)
 - Make notifications easy to add from the activity
 - Notifications should close
 - Once a notification is closed it should not reappear
Hyperlinks per activity (mailing lists, RFC info, field status, gym status, etc)
Add Weather globally
Add icons for dashboard activities?
Work on styling, very grayish right now.
Refactor space and time to event
 - Normalize into a single entity
 - Will affect the database tables
Finish services
 - Participants
 - Activities
 - Events
 - Comments
