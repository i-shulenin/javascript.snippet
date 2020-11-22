const types = [
  {typeId: '1', typeName: 'Начало заправки'},
  {typeId: '2', typeName: 'Окончание заправки'},
  {typeId: '3', typeName: 'Начало слива'},
  {typeId: '4', typeName: 'Окончание слива'},
];

const data = [
  {
    id: 13,
    connector: 'event',
    accounts: ['montrans_demo'],
    vehicles: [1074001924, 1074001925, 1074001926],
    types: ['1', '2'],
    intervalBegin: 1604178000,
    intervalEnd: 1604782799,
    loadId: 'adada9c3-bb49-4609-9253-8bb17f33c4d5',
    loadTime: null,
    status: 'new',
    display: true,
    createdAt: {date: '2020-11-17 16:54:28.000000', timezone_type: 3, timezone: 'Europe/Moscow'},
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: 14,
    connector: 'event',
    accounts: ['nova'],
    vehicles: [],
    types: ['1', '2'],
    intervalBegin: 1605819600,
    intervalEnd: 1605905999,
    loadId: '7b1c44ad-4c24-4b96-a7c0-2c1701dbc896',
    loadTime: null,
    status: 'new',
    display: true,
    createdAt: {date: '2020-11-20 07:25:17.000000', timezone_type: 3, timezone: 'Europe/Moscow'},
    updatedAt: null,
    deletedAt: null,
  }
];