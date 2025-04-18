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
    template: '<div data-view="content" role="tabpanel" aria-roledescription="slide" aria-label="Slide {{slideIndex}}"></div>',
    ready: async function() {
      const thisSlide = this;
      let $slide = $(thisSlide);
      let $slideElement = $($slide[0].el);

      $slideElement.attr('tabindex', '0');

      $slideElement.find('[data-view="content"]').attr('aria-label', `Slide ${thisSlide.data.slideIndex + 1}`);

      await Fliplet.Widget.initializeChildren(thisSlide.$el, thisSlide);

      thisSlide.fields = _.assign({
        requiredForm: false
      }, thisSlide.fields);
    }
  },
  views: [
    {
      name: 'content',
      displayName: 'Slide content',
      placeholder: '<div class="well text-center" aria-live="polite">Add components to build your slide</div>'
    }
  ]
});
