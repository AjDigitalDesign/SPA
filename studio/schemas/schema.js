// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

//Objects Import
import social from "./objects/social";
import HeroImage from "./objects/HeroImage";
import link from "./objects/link";
import AboutUs from "./objects/AboutUs";
import imageGallery from "./objects/imageGallery";
import staff from "./objects/staff";

//Page Import
import home from "./pages/home";

//Document Imports
import customize from "./customize";


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */

      //Object Types
      social,
      HeroImage,
      link,
      AboutUs,
      imageGallery,
      staff,



      //Page Imports
      home,

      //Document Types
      customize
  ])
})
