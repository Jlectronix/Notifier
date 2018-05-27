
goog.module('controllers.app')
// notifier
// AppCntrl is the root controller of notifier
//
class AppCntrl extends Silica.Controllers.Base {
  // Constructor receives the element which specified this controller
  constructor (element) {
    super(element)
    this.name = 'notifier'
    this.version = '1.0.0'
  }
}

exports = AppCntrl
