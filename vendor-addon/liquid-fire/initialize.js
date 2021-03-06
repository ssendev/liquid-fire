import Transitions from "./transitions";

export default function initialize(container, config) {
  var tm = Transitions.map(config);
  tm.container = container;
  container.register('transitions:map', tm,
                     {instantiate: false});
  ['outlet', 'with', 'if'].forEach(function(viewName) {
    container.injection('view:liquid-' + viewName, 'transitions', 'transitions:map');
  });
}
