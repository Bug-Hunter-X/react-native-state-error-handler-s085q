```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>{data?.name ?? 'Loading...'}</Text> {/* Safe access using optional chaining and nullish coalescing */}
    </View>
  );
};
```