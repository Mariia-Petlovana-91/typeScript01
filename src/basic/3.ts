let multi: string | number;

multi = 'Hello world';
multi = 2024;

type FILTER = 'enable' | 'disable';

const FILTERS: { ENABLE: FILTER; DISABLE: FILTER } = {
  ENABLE: 'enable',
  DISABLE: 'disable',
};


export { multi, FILTERS }

