Fliplet.Widget.instance({
  name: 'slide',
  childOf: ['slider'],
  displayName: 'Slide',
  icon: 'fa-square-o',
  data: {
    slideIndex: 0,
    formCount: 0,
    sliderRequiredForms: []
  },
  render: {
    class: 'swiper-slide',
    template: '<div data-view="content"></div>',
    ready: function() {
      /*var thisy = this;
      if (thisy.fields.requiredForm) {
      //thisy.id
        if (Fliplet.FormBuilder) {
        Fliplet.FormBuilder.getAll().then(function(forms) {
          thisy.preventNext = true
        });
      }
      }*/
      /*if (Fliplet.FormBuilder) {
        Fliplet.FormBuilder.getAll().then(function(forms) {
          if (thisy.fields.requiredForm) {
            thisy.data.sliderRequiredForms.push({
              sliderId: $(forms[0].instance.$el.closest('[name="slide"]')).attr('data-helper-id')
              slideIndex: thisy.data.slideIndex,
              formIndex: thisy.data.formCount,
              form: forms[thisy.data.formCount]
            });
          }
          thisy.data.formCount++;
          thisy.data.slideIndex++;
        });
      } else {
        thisy.data.slideIndex++;
      }
      console.log(thisy.data.sliderRequiredForms);*/
    }
  },
  views: [
    {
      name: 'content',
      displayName: 'Slide content',
      placeholder: '<div class="well text-center">Add components to build your slide</div>'
    }
  ]
});