import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { SARS } from '../../../api/temp-data/temp-collections/tempCollections.js';
import TempSARSList from '../../components/temp-components/tempSARSList.js';
import Loading from '../../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('SARS.list');
  if (subscription.ready()) {
    const sarsList = SARS.find().fetch();
    onData(null, { sarsList });
  }
};

export default composeWithTracker(composer, Loading)(TempSARSList);