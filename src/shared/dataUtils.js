import { keysToCamel } from '../shared/utils';
import { GraphQLClient, gql } from 'graphql-request';
import { endpoint } from '../shared/utils';

export const gqlClient = new GraphQLClient(endpoint, { headers: {} });

export const fetchEventData = async (client, eventId) => {
  const fetchEventDataByIdQuery = gql`
  {
    sampleEvent(id: ${eventId}) {
      id
      name
      event_type
      permission
      start_time
      end_time
      description
      speakers {
          name
      }
      related_events
    }
  }
`;
  const response = await client.request(fetchEventDataByIdQuery);
  return keysToCamel(response.sampleEvent);
};

export const fetchAllEvents = async (client) => {
  const fetchAllEventsQuery = gql`
    {
      sampleEvents {
        id
        name
        event_type
        permission
        start_time
        end_time
        description
        speakers {
          name
        }
        public_url
        private_url
        related_events
      }
    }
  `;
  const response = await client.request(fetchAllEventsQuery);
  return response.sampleEvents;
};
