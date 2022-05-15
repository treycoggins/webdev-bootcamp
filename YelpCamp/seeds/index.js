const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const path = require('path');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 30) + 10;
    const camp = new Campground({
      title: `${sample(descriptors)} ${sample(places)}`,
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      image: 'https://source.unsplash.com/collection/483251',
      description: 'Cupcake ipsum dolor sit amet. Marshmallow I love powder chocolate ice cream cupcake. Biscuit jelly-o oat cake chupa chups jelly jelly beans liquorice shortbread bear claw. Sugar plum cheesecake sweet lollipop cake jelly beans chocolate bar shortbread.',
      price
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
