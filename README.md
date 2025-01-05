# BlockUser Component

This component allows you to block a user and display a message to them.

## Installation

This component is likely part of a larger project and not meant to be installed separately. 

## Usage

The BlockUser component is used to block a user and display a message to them. Here's an example of how to use it:

```jsx
import BlockUser from './BlockUser';

const MyComponent = () => {
  const [isBlocked, setIsBlocked] = useState(false);

  const handleBlockUser = () => {
    setIsBlocked(true);
  };

  return (
    <div>
      <button onClick={handleBlockUser}>Block User</button>
      {isBlocked && <BlockUser blockUser={true} RoseId="my-unique-id" edit={{ backgroundColor: 'blue' }}/>}
    </div>
  );
};