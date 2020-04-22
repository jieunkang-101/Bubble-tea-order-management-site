
# Merchant site 

#### A movie site

#### By **Jieun Kang and Jiwon Han**

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)
![LastCommit](https://img.shields.io/github/last-commit/jiwon-seattle/merchant-site)
![Languages](https://img.shields.io/github/languages/top/jiwon-seattle/merchant-site)
[![MIT license](https://img.shields.io/badge/License-MIT-orange.svg)](https://lbesson.mit-license.org/)


## 1. Description

A website for selling movie CD <br>
A user should be able to do the following:
<li>Create, Read, Update and Delete items in the store. Items should have fields for name, description, and quantity (along with any other fields you wish to add).</li>
<li>Increase or decrease the quantity of an item in the store. For instance, if a user clicks "Buy", the quantity will decrease by one. If a user clicks "Restock", it will increment by a specified number.</li>
<li>When the quantity of an item is reduced to 0, the item should say "Out of Stock". A user should not be able to reduce the quantity of an item below 0.</li>


### Sreenshot

<image src="src/img/diagram.jpg" width="550px" />

## 2. Development
### Tech stack:
+ [NPM](https://www.npmjs.com/) for package management
+ [react](https://reactjs.org/) as core stack

### To run dev mode locally:
```bash
  $ git clone https://github.com/jiwon-seattle/Bubble-tea-shop.git
  $ cd merchant-site
  $ npm install  
  # After successfull pkg installtion
  $ npm start
```
Now, it will automatically open http://localhost:3000 and show you merchant website.

## 3. Known Bugs

There are no known bug at this moment

## 4. Support and contact details

Any feedback is appreciated! Please contact at email: Jieun Kang jieunkang101@gmail.com or jiwon1.han@gmail.com

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Jieun Kang and Jiwon Han_**
