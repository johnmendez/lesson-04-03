import reducer from '../app/reducer';

module('reducer', () => {
  test('default state', (assert) => {
    assert.deepEqual(reducer(null, {}), { snacks: [], bestCereal: null }, 'default state');
  });

  test('load all snacks', (assert) => {
    const oldState = { snacks: [] };
    const oldStateTwo = { snacks: [8, 9] };
    const oldStateThree = { bestCereal: [] };
    const actionOne = { type: 'SNACK@FIND_ALL', data: [1, 2, 3] };
    const actionTwo = { type: 'SNACK@FIND_ALL', data: [{ name: 'Luna Bar' }] };
    const actionThree = { type: 'BEST_CEREAL@SET', data: { name: 'Fruit Loops' } };
    const actionFour = { type: 'BEST_CEREAL@SET', data: 5 };

    assert.deepEqual(reducer(oldState, actionOne), { snacks: actionOne.data });
    assert.deepEqual(reducer(oldState, actionTwo), { snacks: actionTwo.data });
    assert.deepEqual(reducer(oldStateTwo, actionOne), { snacks: [1, 2, 3, 8, 9] });
    assert.deepEqual(reducer(oldStateThree, actionThree), { bestCereal: { name: 'Fruit Loops' } });
    // assert.deepEqual(reducer(oldStateThree, actionFour), { bestCereal: 5 });
  });

  test('add a snack', (assert) => {
    const emptyState = { snacks: [] };
    const oldState = { snacks: [{ name: 'Doritos' }] };
    const actionOne = { type: 'SNACK@CREATE', data: { name: 'Luna Bar' } };
    const actionTwo = { type: 'SNACK@CREATE', data: { name: 'Clif Bar' } };

    assert.deepEqual(reducer(emptyState, actionOne), { snacks: [actionOne.data] });
    assert.deepEqual(reducer(emptyState, actionTwo), { snacks: [actionTwo.data] });

    assert.deepEqual(reducer(oldState, actionOne), { snacks: [actionOne.data, { name: 'Doritos' }] });
  });
});
