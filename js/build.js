Fliplet.Widget.instance({
  name: 'slide',
  childOf: ['slider'],
  displayName: 'slide',
  icon: 'fa-square-o',
  data: {
    slideIndex: 0,
    formCount: 0,
    sliderRequiredForms: []
  },
  render: {
    class: 'swiper-slide',
    template: '<div data-view="content"></div>',
    ready: function () {
      Fliplet.Widget.initializeChildren(this.$el, this);

      this.fields = _.assign({
        requiredForm: false
      }, this.fields)

      var thisy = this;
      if (thisy.fields.requiredForm == true) {
        //thisy.id
        if (Fliplet.FormBuilder) {
          Fliplet.FormBuilder.getAll().then(function (forms) {
            thisy.preventNext = true
          });
        }
      }
      if (Fliplet.FormBuilder) {
        Fliplet.FormBuilder.getAll().then(function (forms) {
          if (thisy.fields.requiredForm == true) {
            thisy.data.sliderRequiredForms.push({
              sliderId: $(forms[0].instance.$el.closest('[name="slide"]')).attr('data-helper-id'),
              slideIndex: thisy.data.slideIndex,
              formIndex: thisy.data.formCount,
              form: forms[thisy.data.formCount]
            });
          }
          thisy.data.formCount++;
          thisy.data.slideIndex++;
        });



        // var formName;
        // Fliplet.Hooks.on('beforeFormSubmit', function () {
        //   Fliplet.FormBuilder.get()
        //     .then(function (form) {
        //       if (form) {
        //         formName = form.name
        //       }
        //     });
        // });

        // Fliplet.Hooks.on('afterFormSubmit', function (response) {
        //   return Fliplet.App.Storage.set(formName, response.result.id)
        // });

        // Fliplet.App.Storage.get(formName).then(function (value) {
        //   if (value) {
        //     Fliplet.FormBuilder.get().then(function (form) {
        //       if (form) {
        //         form.load(function () {
        //           return Fliplet.DataSources.connect().then(function (connection) {
        //             return connection.findById(value);
        //           });
        //         });
        //       }
        //     });
        //   }
        // });


      } else {
        thisy.data.slideIndex++;
      }
      // console.log(thisy.data.sliderRequiredForms);
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