//Validation

const validation = {

    validate: function (state, validations, currentErrors = null, inputID = null, file = null) {
        var validationClasses = {};
        var validationErrors = {};
        var formattedValidations = [];
        var formattedErrors = [];
        for (let i = 0; i < validations.length; i++) {
            var errors = [];
            var name = validations[i][0];
            let value = state[validations[i][0]];
            let label = validations[i][1];
            let rules = validations[i][2];
            //Get the rules in array format
            rules = rules.split("|");
            errors = validation.checkAgainstRules(value, rules, errors, label, state, file);
            //Input onChange
            if (inputID !== null) {
                if (inputID === name) {
                    //Check if error object has been set in the state in which case we do not want to overwrite existing errors,
                    //but only update the passed input
                    if (typeof state[currentErrors]['errors'] !== "undefined" && Object.keys(state[currentErrors]['errors']).length > 0 && state[currentErrors]['errors'].constructor === Object) {
                        state[currentErrors]['errors'][inputID] = errors;
                        var stateErrorsArray = Object.keys(state[currentErrors]['errors']).map((m) =>
                            state[currentErrors]['errors'][m]
                        );
                        for (var property in state[currentErrors]['errors']) {
                            if ( state[currentErrors]['errors'].hasOwnProperty(property) ) {
                                formattedValidations.push(property);
                            }
                        }
                        formattedErrors = stateErrorsArray;
                    } else {
                        formattedValidations.push(name);
                        formattedErrors.push(errors);
                    }
                }
            } else {
                formattedValidations.push(name);
                formattedErrors.push(errors);
            }
        }
        var valid = true;

        for (let k = 0; k < formattedValidations.length; k++) {
            //If errors set class to invalid, else set class to valid
            if (formattedErrors[k].length > 0) {
                validationClasses[formattedValidations[k]] = 'invalid';
                valid = false;
            } else {
                validationClasses[formattedValidations[k]] = 'valid';
            }
            validationErrors[formattedValidations[k]] = formattedErrors[k];
        }
        return validation.validationObject(validationClasses, validationErrors, valid);
    },

    validationObject: function(validationClasses, validationErrors, valid) {
        return {
            classes: validationClasses,
            errors: validationErrors,
            valid: valid
        };
    },

    checkAgainstRules: function(value, rules, errors, label, state, file) {
        function formatSizeRequirement(requirement) {
            var formattedRequirement = requirement.match(/(\d+|[^\d]+)/g);
            var unit = formattedRequirement[1];
            var size = formattedRequirement[0];
            var formattedSize = '';
            if (unit === 'KB') {
                formattedSize = size * 1024;
            } else if (unit === 'MB') {
                formattedSize = size * 1048576;
            } else if (unit === 'GB') {
                formattedSize = size * 1073741824;
            }
            return formattedSize
        }

        for (let j = 0; j < rules.length; j++) {
            var formattedRule = rules[j].split(":");
            var rule = formattedRule[0];
            var requirement = formattedRule[1];
            switch (rule) {
                case 'required':
                    //Not onFileInputChange
                    if (file === null) {
                        //Check if value is array
                        if (typeof value.length !== 'undefined') {
                            if (value.length === 0) {
                                errors.push(label + ' is required.');
                                return errors;
                            }
                        }
                        else {
                            if (value === '') {
                                errors.push(label + ' is required.');
                                return errors;
                            }
                        }
                    }
                    break;
                case 'email':
                    if ( ! new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$").test(value) ) {
                        errors.push(label + ' should be a valid email address.')
                    }
                    break;
                case 'fileType':
                    if (file !== null) {
                        if (typeof file.extension !== 'undefined' || file !== null) {
                            var allowedFileTypes = requirement.split(",");
                            var formattedExtension = file.extension.replace(/.*\./, '').toLowerCase();
                            if (allowedFileTypes.indexOf(formattedExtension) < 0) {
                                errors.push(label + ' should be of the following extensions: ' + requirement + '.')
                            }
                        }
                    }
                    break;
                case 'maxFileSize':
                    if (file !== null) {
                        if (typeof file.size !== 'undefined') {
                            var formattedSizeRequirement = formatSizeRequirement(requirement);
                            if (file.size > formattedSizeRequirement) {
                                errors.push(label + ' may not exceed file size of ' + requirement + '.')
                            }
                        }
                    }
                    break;
                case 'maxPixelSize':
                    if (file !== null) {
                        if (typeof file.width !== 'undefined') {
                            var width = parseInt(requirement.split("x")[0], 10);
                            var height = parseInt(requirement.split("x")[1], 10);
                            if (file.width > width || file.height > height) {
                                errors.push(label + ' may not exceed pixel size of: ' + requirement + '.')
                            }
                        }
                    }
                    break;
                case 'ratio':
                    if (file !== null) {
                        if (typeof file.ratio !== 'undefined') {
                            if (file.ratio !== parseInt(requirement, 10)) {
                                if (parseInt(requirement, 10) === 1) {
                                    requirement = 'square'
                                }
                                errors.push(label + ' should be of the following ratio: ' + requirement + '.')
                            }
                        }
                    }

                    break;
                case 'max':
                    if ( ! new RegExp("^.{1," + requirement +"}$").test(value) ) {
                        errors.push(label + ' should be at least ' + requirement + ' characters.')
                    }
                    break;
                case 'min':
                    if ( ! new RegExp("^.{" + requirement + ",}$").test(value) ) {
                        errors.push(label + ' should be at least ' + requirement + ' characters.')
                    }
                    break;
                case 'mustMatch':
                    if ( value !== state[requirement] ) {
                        errors.push(label + ' must match.')
                    }
                    break;
                case 'tel':
                    if ( ! new RegExp("^[0-9]*$").test(value) ) {
                        errors.push(label + ' should only contain numbers.')
                    }
                    break;
                case 'url':
                    if ( ! new RegExp("^(ftp|http|https):[^]+$").test(value) ) {
                        errors.push(label + ' should be a valid URL.')
                    }
                    break;
                default:
                    break;
            }
        }
        return errors;
    },

    scrollToFirstError: function(errors, duration = 200, easing = 'linear', callback) {
        //Get first element with errors
        var firstErrorElement = '';
        var currentTopPosition = '';
        for (let property in errors) {
            if (errors[property].length > 0) {
                let element = document.getElementById(property);
                let viewportOffset = element.getBoundingClientRect();
                if (currentTopPosition === '') {
                    currentTopPosition = viewportOffset.top;
                } else {
                    if (currentTopPosition > viewportOffset.top) {
                        currentTopPosition = viewportOffset.top;
                        firstErrorElement = element;
                    }
                }
            }

        }

        //Set destination to firstErrorElement
        const destination = firstErrorElement;

        const easings = {
            linear(t) {
                return t;
            },
            easeInQuad(t) {
                return t * t;
            },
            easeOutQuad(t) {
                return t * (2 - t);
            },
            easeInOutQuad(t) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            },
            easeInCubic(t) {
                return t * t * t;
            },
            easeOutCubic(t) {
                return (--t) * t * t + 1;
            },
            easeInOutCubic(t) {
                return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            },
            easeInQuart(t) {
                return t * t * t * t;
            },
            easeOutQuart(t) {
                return 1 - (--t) * t * t * t;
            },
            easeInOutQuart(t) {
                return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
            },
            easeInQuint(t) {
                return t * t * t * t * t;
            },
            easeOutQuint(t) {
                return 1 + (--t) * t * t * t * t;
            },
            easeInOutQuint(t) {
                return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
            }
        };

        const start = window.pageYOffset;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
        const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
        const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

        if ('requestAnimationFrame' in window === false) {
            window.scroll(0, destinationOffsetToScroll);
            if (callback) {
                callback();
            }
            return;
        }

        function scroll() {
            const now = 'now' in window.performance ? performance.now() : new Date().getTime();
            const time = Math.min(1, ((now - startTime) / duration));
            const timeFunction = easings[easing](time);
            window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

            if (window.pageYOffset === destinationOffsetToScroll) {
                if (callback) {
                    callback();
                }
                return;
            }

            requestAnimationFrame(scroll);
        }

        scroll();
    }
}

module.exports = {
    validate: validation.validate,
    scrollToFirstError: validation.scrollToFirstError
};