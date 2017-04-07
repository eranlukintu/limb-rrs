import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { STRUCTUREITEMS } from '../../../api/temp-data/temp-collections/tempCollections.js';
import { TESTDATA } from '../../../api/temp-data/temp-collections/tempCollections.js';
import { DISPLAYDATA } from '../../../api/temp-data/temp-collections/tempCollections.js';
import { OBSERVATIONDATA } from '../../../api/temp-data/temp-collections/tempCollections.js';
import TempObservationsComponent from '../../components/temp-components/tempObservationsComponent.js';
import Loading from '../../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('DisplayData.observations');

  if (subscription.ready()) {
    const observationsList = OBSERVATIONDATA.find().fetch();
    onData(null, { observationsList });
  }
};

export default composeWithTracker(composer, Loading)(TempObservationsComponent);