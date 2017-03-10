import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { STRUCTUREITEMS } from '../../../api/temp-data/temp-collections/tempCollections.js';
import TempDataStructureItemsList from '../../components/temp-components/tempDataStructureItemList.js';
import Loading from '../../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('StructureItems.list');
  if (subscription.ready()) {
    const dsiList = STRUCTUREITEMS.find().fetch();
    onData(null, { dsiList });
  }
};

export default composeWithTracker(composer, Loading)({ TempDataStructureItemsList });