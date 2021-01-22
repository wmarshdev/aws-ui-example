import React from 'react';
import './App.css';
import { Alert, AppLayout, Badge, Box, Button, ButtonDropdown, Checkbox, DatePicker, Flashbar, Modal, PieChart } from '@awsui/components-react';

function App() {
  return (
    <div className="App">
      <AppLayout content={<ComponentDemo />} />
    </div >
  );
}

const ComponentDemo = () => <main>
  <Box padding="m">
    <Button
      onClick={() => window.alert("I was clicked!")}
      variant="primary">I am a button!</Button>
    <Box padding="m">
      <Alert>I am an info alert!</Alert>
      <Alert type="error">I am an error alert!</Alert>
      <Alert type="success">I am a success alert!</Alert>
      <Alert type="warning">I am a warning alert!</Alert>
    </Box>
    <Box padding="m">
      <Badge>I'm a badge!</Badge>
      <Badge color="blue">Blue badge!</Badge>
      <Badge color="green">Green badge!</Badge>
      <Badge color="red">Red badge!</Badge>
    </Box>
    <Box padding="m">
      <ButtonDropdown items={[{ id: "1", text: "item 1" }, { id: "2", text: "item 2" }]}>Dropdown</ButtonDropdown>
    </Box>
    <Box padding="m">
      <Checkbox checked={true}>checkbox!</Checkbox>

    </Box>
    <Box padding="m">
      <DatePicker value="" nextMonthAriaLabel="next month" previousMonthAriaLabel="prev month" todayAriaLabel="today" />

    </Box>
    <Box>
      <Flashbar items={[{ type: "error", content: "One of these things that isn't quite an alert, but similar..." }]} />
    </Box>
    <Box padding="m">
      <Modal header="A modal window" footer="Window footer" visible={false}><Button variant="primary">Contents</Button></Modal>
    </Box>
    <Box padding="m">
      <PieChart data={[{ title: "Data 1", value: 3 }, { title: "Data 2", value: 10 }]}></PieChart>
    </Box>
  </Box>
</main>

export default App;
