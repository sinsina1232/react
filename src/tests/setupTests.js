import Enzyme from 'enzyme';
import DotENV from 'dotenv';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({
   adapter: new Adapter()
 });
 DotENV.config({'path':'.env.test'});
