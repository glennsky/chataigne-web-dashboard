import Application from '@ember/application';

import { initialize } from 'chataigne-web-dashboard/initializers/connect-websocket';
import { module, test } from 'qunit';
import { run } from '@ember/runloop';

module('Unit | Initializer | connect-websocket', function(hooks) {
  hooks.beforeEach(function() {
    this.TestApplication = Application.extend();
    this.TestApplication.initializer({
      name: 'initializer under test',
      initialize
    });

    this.application = this.TestApplication.create({ autoboot: false });
  });

  hooks.afterEach(function() {
    run(this.application, 'destroy');
  });

  // TODO: Replace this with your real tests.
  test('it works', async function(assert) {
    await this.application.boot();

    assert.ok(true);
  });
});
