let visibility = false;

const onToggleVisibility = () => {
  visibility = !visibility;
  renderApp();
};

const app = document.getElementById('app');

const renderApp = () => {
  const visibilityApp = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggleVisibility}>
        {visibility ? 'Hide details': 'Show details'}
      </button>
      {visibility && <p>Hey. These are some details you can now see!</p>}
    </div>
  );

  ReactDOM.render(visibilityApp, app);
};

renderApp();