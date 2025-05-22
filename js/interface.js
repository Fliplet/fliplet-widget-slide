Fliplet.Widget.generateInterface({
  title: 'slide',
  fields: [
    {
      name: 'requiredFormBackwardNavigation',
      type: 'radio',
      label: 'Prevent users from moving to the previous slide? ',
      options: [{ value: true, label: 'Yes' }, { value: false, label: 'No' }],
      default: false
    }
  ]
});
