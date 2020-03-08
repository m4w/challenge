import React, {useEffect, useState} from 'react';

import Agent from 'components/Agent';
import Shop from 'components/Shop';
import Property from 'components/Property';
import {useStateValue} from 'provider/StateProvider';

const fetchData = async url => {
  try {
    const result = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          console.error(
            `Error while fetching - status:${response.status} text:${response.statusText}`
          );
        }
      })
      .then(response => (response ? response.json() : null));
    return result ? result : [];
  } catch (e) {
    console.error(`Error while fetching - message:${e}`);
  }

  return [];
};

function filterItemsByQuery(items, query) {
  return items.filter(item => item.name.toLowerCase().includes(query));
}

function ItemList() {
  const [items, setItems] = useState({agents: [], shops: [], properties: []});
  useEffect(() => {
    const getData = async () => {
      const agents = await fetchData(
        'https://5e467f50fd1af600145de248.mockapi.io/api/agents'
      );
      const shops = await fetchData(
        'https://5e467f50fd1af600145de248.mockapi.io/api/shops'
      );
      const properties = await fetchData(
        'https://5e467f50fd1af600145de248.mockapi.io/api/properties'
      );

      setItems({
        agents,
        shops,
        properties
      });
    };
    getData();
  }, []);

  const [renderItems, setRenderItems] = useState({
    agents: [],
    shops: [],
    properties: []
  });
  useEffect(() => {
    setRenderItems(items);
  }, [items]);

  // eslint-disable-next-line
  const [{search, filter}, dispatch] = useStateValue();
  useEffect(() => {
    const query = search.query;
    setRenderItems({
      agents: filter.agents ? filterItemsByQuery(items.agents, query) : [],
      shops: filter.shops ? filterItemsByQuery(items.shops, query) : [],
      properties: filter.properties
        ? filterItemsByQuery(items.properties, query)
        : []
    });
  }, [search, filter, items]);

  return (
    <div>
      {renderItems.agents.length > 0 &&
        renderItems.agents.map(agent => <Agent key={agent.id} {...agent} />)}
      {renderItems.shops.length > 0 &&
        renderItems.shops.map(shop => <Shop key={shop.id} {...shop} />)}
      {renderItems.properties.length > 0 &&
        renderItems.properties.map(property => (
          <Property key={property.id} {...property} />
        ))}
    </div>
  );
}

export default ItemList;
