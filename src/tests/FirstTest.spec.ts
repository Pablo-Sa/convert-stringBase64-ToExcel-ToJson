import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Pablo'

  expect(user.name).toEqual('Pablo')
})
