# Generic Ticket Booking Site:
## Introduction:
<div>Post a ticket. Any type of ticket e.g. Cinema hall, bus tickets, Zoo Ticket ....</div>
<div>Few presets are included e.g. Bus, Cinema Hall & Micro Bus having options to <b> Select Seats</b></div>
<div>Even if Seats are unnecessary for your type of ticket just give maximum visitor.</div>
<div><i>i.e. Maximum visitor per day for Museum, Zoo, Concert, Cable Car, ....</i></div>

<div><div>Stack: Nodejs(library: Express), Reactjs, Postgres(ORM: Sequelize)</div></div>

## Running the application:
clone the git reop

### Running APIs:

> cd backdend

Create .env File and give relevant values(check email for .env & copy and paste)

> npm install

If you want to start fresh every time: 
> sequelize db:drop

cd backend
Creating, Migrating and Seeding DB:
> sequelize db:create
> sequelize db:migrate
> sequelize db:seed:all

To run the application 
>>cd .. // if you are in /backend/database

>>npm run dev

### Running Frontend:
 
 > cd client //from root directory:
 
 > yarn install
 > yarn start
 
<div></div>

## Instruction and Screenshots:

### Homepage:

<img src="https://i.imgur.com/SfcsSS8.png" />

## Ticket Bookings
#### After you sign in <div>
<div>
<img src="https://i.imgur.com/VtE2NCx.png" />
<img src="https://i.imgur.com/FBZrjxP.png" />
</div>
<div>
<h2>Similarly Micro Bus and Bus configuration is shown. For Now Preset of Bus, Micro Bus & Cinema Hall  seating configuration is Set.</h5>
</div>

<h6>After successful booking </h6>
<div>
<img src="https://i.imgur.com/dzF0RrH.png" />
</div>


# Similarly
### You can view your booked, Printed Slip, Profile From User


<br /> <br />
<h1>ADMIN PANAL</h1>
<h3>localhost:3000/admin/dashboard</h3>
<img src="https://i.imgur.com/PeNX0m1.png" />

<h4>Admin Can view All Tickets:<h4>
<img src="https://i.imgur.com/5p3wYsx.png" />

<h4>Admin Can View All Bookings:</h4>
<img src="https://i.imgur.com/kjIDMNv.png" />

<h4>Admin Can Create New Tickets:</h4>
<img src="https://i.imgur.com/0h6SPXM.png" />

<h4>Admin Can View Site Statistics:</h4>
<img src="https://i.imgur.com/XLlMvxa.png" />



