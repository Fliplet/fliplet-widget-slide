var requiredFormDescription = ' ';

Fliplet.Widget.generateInterface({
  title: 'slide',
  fields: [
    {
      name: 'requiredForm',
      type: 'radio',
      label: 'Is there a required form on this slide?',
      description: requiredFormDescription,
      options: [{ value: true, label: 'Yes' }, { value: false, label: 'No' }],
      default: false,
      change: function(value) {
        requiredFormDescription = value ? 'Note, that selecting the screen redirection on the form settings will not work' : ' ';
        $('[data-field="requiredForm"]').find('.help-block').html(requiredFormDescription);
        Fliplet.Helper.field('requiredFormForwardNavigation').toggle(value);
        Fliplet.Helper.field('requiredFormBackwardNavigation').toggle(value);
      }
    },
    {
      name: 'requiredFormForwardNavigation',
      type: 'radio',
      label: 'Prevent users from moving to the next slide until a form is submitted',
      options: [{ value: true, label: 'Yes' }, { value: false, label: 'No' }],
      default: false,
      ready: function() {
        Fliplet.Helper.field('requiredFormForwardNavigation').toggle(
          Fliplet.Helper.field('requiredForm').get()
        );
      }
    },
    {
      name: 'requiredFormBackwardNavigation',
      type: 'radio',
      label: 'Prevent users from moving to the previous slide until a form is submitted',
      options: [{ value: true, label: 'Yes' }, { value: false, label: 'No' }],
      default: false,
      ready: function() {
        Fliplet.Helper.field('requiredFormBackwardNavigation').toggle(
          Fliplet.Helper.field('requiredForm').get()
        );
      }
    }
  ]
});
