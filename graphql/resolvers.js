const Element = require('../models/Element')
const resolver = {
  Query: {
    getAllElements: async(_, {ID}) => {
      try {
        const elements = Element.find()
        .populate('Effective')
        .populate('Weak')
        .populate('Resistant');
        
        if(!elements) throw new Error('No Elements Found');
        
        return elements;
      } catch(e){
        throw new Error(`Error getting all elements: ${e.message}`);
      }
    }
  },
  Mutation: {
    createElement: async(_, {name}) => {
      console.trace("Test");
      try {
        const newElement = {
          name,
        }
        return await Element.create(newElement);
      } catch(e) {
        throw new Error(`Error creating new element: ${e.message}`);
      }
    },
    updateElement: async(_, {ID, name}) => {
      try {
        const updateElement = {
          name,
        }
        const element = Element.findOneAndUpdate(ID, updateElement);
        
        if(!element) throw new Error(`No Element Found with ID: ${ID}`);
        
        return element;
      } catch(e){
        throw new Error(`Error updating element: ${e.message}`);
      }
    },
    deleteElement: async(_, {ID}) => {
      try {
        const element = Element.findByIdAndDelete(ID)
        
        if(!element) throw new Error(`No Element Found with ID: ${ID}`);
        
        return element;
      }catch(e){
        throw new Error(`Error deleting element: ${e.message}`);
      }
    },
    updateElementEffectiveness: async(_, {ID, effective, weak, resistance}) => {
      try {
        console.log(effective, weak, resistance);
        const element = await Element.findById(ID);
        
        if(!element) throw new Error(`No Element Found with ID: ${ID}`);
        if(effective) element.Effective = effective;
        if(weak) element.Weak = weak;
        if(resistance) element.Resistant = resistance
        
        await element.save()
        
        const populatedElement = await Element.findById(ID)
        .populate('Effective')
        .populate('Weak')
        .populate('Resistant');
        
        return await populatedElement;
      }catch(e){
        throw new Error(`Error updating element effectivness: ${e.message}`);
      }
    }
  }
}

module.exports = resolver;