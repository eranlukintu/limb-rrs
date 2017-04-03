import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { STRUCTUREITEMS } from '../../../api/temp-data/temp-collections/tempCollections.js';
import { TESTDATA } from '../../../api/temp-data/temp-collections/tempCollections.js';
import { DISPLAYDATA } from '../../../api/temp-data/temp-collections/tempCollections.js';
import TempOutlineComponent from '../../components/temp-components/tempOutlineComponent.js';
import Loading from '../../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('DisplayData.all');

  if (subscription.ready()) {
    const testDataList = DISPLAYDATA.find().fetch();
    onData(null, { testDataList });
  }
};

export default composeWithTracker(composer, Loading)(TempOutlineComponent);