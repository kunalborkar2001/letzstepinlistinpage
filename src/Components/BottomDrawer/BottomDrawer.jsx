import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

export default function BottomDrawer() {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
        <React.Fragment key={'bottom'}>
          <Button onClick={toggleDrawer('bottom', true)}>Bottom</Button>
          <Drawer
            anchor={'bottom'}
            open={state['bottom']}
            onClose={toggleDrawer('bottom', false)}
          >
            Kunal
          </Drawer>
        </React.Fragment>
    </div>
  );
}