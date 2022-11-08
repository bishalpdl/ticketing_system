'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Tickets',
      [
        {
            uuid: '0a4e8469-570c-458f-b38c-4e34624f872a',
            title: 'Tourist Bus Kathmandu to Chitwan',
            description: 'Tourist bus service from kathamandu to chcitwan in 6hrs. Service Comfortable seats, regular interval break, on time Arrival',
            valid_till: '2022-12-01',
            preset: 'bus',
            capacity_per_day:'32',
            price: '500',
            time:'10:00',
            createdAt: '2021-11-01T16:30:07.592Z',
            updatedAt: '2021-11-01T16:30:07.592Z',
            agency: 'Baba Adventure Travels',
            imageURL:'http://res.cloudinary.com/dgch9cczv/image/upload/v1667880561/first/fcma1ont7oxpd0ytrb8s.jpg'            
        },
        {
            uuid: '80093eb8-173b-4e8e-9a2b-4aaa94ce9a03',
            title: 'Movie Ticket for Godzilla',
            description: 'Godzilla is re-releasing in Sri Krishna Hall, Rupandi Satobato Kathmandu Hall.',
            valid_till: '2022-12-01',
            preset: 'cinema',
            capacity_per_day:'52',
            price: '500',
            time:'10:00',
            createdAt: '2021-11-01T16:30:07.592Z',
            updatedAt: '2021-11-01T16:30:07.592Z',
            agency: 'Sri Krishna Hall',
            imageURL:'http://res.cloudinary.com/dgch9cczv/image/upload/v1667878633/first/c8ugvo7fdil4u2gbeoox.jpg'            
        },
        {
            uuid: '1234d223-b9aa-4cd4-8f58-7c4096c4e099',
            title: 'Boat Ride in Phew Lake',
            description: 'Phewa Lake, Phewa Tal or Fewa Lake is a freshwater lake in Nepal formerly called Baidam Tal located in the south of the Pokhara Valley that includes Pokhara city. Ride Boat in this beautiful Lake.',
            valid_till: '2022-11-30',
            capacity_per_day:'52',
            price: '500',
            time:'10:00',
            createdAt: '2021-11-01T16:30:07.592Z',
            updatedAt: '2021-11-01T16:30:07.592Z',
            agency: 'New Boating Company',
            imageURL:'http://res.cloudinary.com/dgch9cczv/image/upload/v1667878399/first/jpgdvrcxdsspkbiwfir5.jpg'            
        },        
        {
            uuid: '80093eb8-173b-4e8e-9a2a-4aaa94ce9a04',
            title: 'Hiace Ticket from kathamandu to Pokhara ',
            description: 'Ride in Hicace from in premium seats by kanca company from kathamandu to Pokhara.',
            valid_till: '2022-12-01',
            preset: 'micro_bus',
            capacity_per_day:'16',
            price: '400',
            time:'10:00',
            createdAt: '2021-11-01T16:30:07.592Z',
            updatedAt: '2021-11-01T16:30:07.592Z',
            agency: 'Kanca Company & Co.',
            imageURL:'http://res.cloudinary.com/dgch9cczv/image/upload/v1667879176/first/fvllmvmark3tjjk6r2yd.jpg'            
        },
        {
            uuid: '84ba10ff-4bcc-4f18-bb11-5fde1f839bfd',
            title: 'Nepali Music Festival',
            description: 'Night Musical Festival. Enjoy the show. Popular Artist like Laure, Vten and other popular artist. Dasarath Rangasala',
            valid_till: '2022-12-01',
            capacity_per_day:'200',
            price: '1500',
            time:'18:00',
            createdAt: '2021-11-01T16:30:07.592Z',
            updatedAt: '2021-11-01T16:30:07.592Z',
            agency: 'Nepali Vevo Music',
            imageURL:'http://res.cloudinary.com/dgch9cczv/image/upload/v1667880748/first/vglbnbbfomlkhqhu18z6.jpg'            
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Tickets', null, {})
  },
}

