Fliplet.Widget.instance({
  name: 'slide',
  childOf: ['slider'],
  data: {
    slideIndex: 0,
    formCount: 0,
    sliderRequiredForms: []
  },
  render: {
    class: 'swiper-slide',
    template: '<div data-view="content"></div>',
    ready: async function() {
      const thisSlide = this;
      let $slide = $(thisSlide);
      let $slideElement = $($slide[0].el);

      await Fliplet.Widget.initializeChildren(thisSlide.$el, thisSlide);

      thisSlide.fields = _.assign({
        requiredForm: false
      }, thisSlide.fields);


      if (Fliplet.FormBuilder) {
        if (thisSlide.fields.requiredForm) {
          Fliplet.FormBuilder.getAll().then(forms => {
            thisSlide.preventNext = true;

            thisSlide.data.sliderRequiredForms.push({
              sliderId: $(forms[0].instance.$el
                .closest('[name="slide"]')).attr('data-helper-id'),
              slideIndex: thisSlide.data.slideIndex,
              formIndex: thisSlide.data.formCount,
              form: forms[thisSlide.data.formCount]
            });
          });
        }

        thisSlide.data.formCount++;
        thisSlide.data.slideIndex++;
      } else {
        thisSlide.data.slideIndex++;
      }
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
