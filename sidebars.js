/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
//  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'Customer script tutorial/intro',
    'gamesettings', 
    {
      type: 'category',
      label: 'installing Python and its packages',
      items: [
      'python tutorial/intro' ,  
      'python tutorial/frommsstore' ,  

   
    ],
    },
    {
      type: 'category',
      label: 'getting the trigger bot',
      items: [
      'Customer script tutorial/download' ,  
      'Customer script tutorial/winrar' , 
      'Customer script tutorial/Extracting' , 
      'Customer script tutorial/run py file',
     

    ],
    },
    'usermanual',
    {
      type: 'category',
      label: 'Potential issues',
      items: [
      'issues/antivirus' ,  
      'issues/pythonfail' , 
      'openwithcmd',
      'issues/otherissues',


    ],
    },
    
  ],
   
};

export default sidebars;
