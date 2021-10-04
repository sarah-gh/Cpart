<template>
    <div class='input-group col' style='padding:0'>
        <!-- <div class='input-group-prepend'>
            <span class='input-group-text'><i class='fa fa-search'></i>&nbsp;{{ getCount() }}</span>
        </div> -->
        <input type='text' class='form-control'
            v-model='searchQuery'
            placeholder='Search'
            @keyup.enter='addItem'
            @keyup.up='prevItem'
            @keyup.down='nextItem'
            @keyup.esc='close'
        >
        <div class='input-group-append' v-if='addBtn'>
            <router-link :to="{ name: 'search', query: { search: searchQuery }}">
                <button class='btn btn-primary' @click='addItem'>
                    <img src="../../../../assets/img/svg-header/arrow-right.svg" />
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-template',
    props: {
        value: {
            required: false,
        },
        items: {
            type: Array,
            required: true
        },
        returns: {
            type: String,
            default: 'id'
        },
        shows: {
            type: String,
            required: true
        },
        firstLabel: {
            type: String,
            default: 'Please select'
        },
        firstDisabled: {
            type: Boolean,
            default: true
        },
        search: {
            type: String,
            default: ''
        },
        addBtn: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            searchQuery: '',
            addedItem: this.value || 0,
            selectedItem: this.value || 0
        }
    },
    computed: {
        columns() {
            if(!this.items.length) return []
            return Object.keys(this.items[0])
        },
        searchColumns() {
            if(!this.search.length) return this.columns
            return this.search.split('|')
        },
        searchedItems() {
            if(!this.searchQuery) {
                this.selectedItem = 0
                if(this.addedItem !== 0 && this.checkItemExists(this.addedItem)) this.selectedItem = this.addedItem
                else this.addedItem = 0
                return this.items
            }

            let items = this.items.filter(item => {
                return this.searchColumns.some((column) => {
                    return String(item[column]).toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
                })
            })

            if(items.length) this.selectedItem = items[0][this.returns]
            else this.selectedItem = 0

            return items
        }
    },
    methods: {
        checkItemExists(item) {
            return _.map(this.items, this.returns).indexOf(item) > -1
        },
        addItem() {
            //if(this.selectedItem == 0) return
            this.addedItem = this.selectedItem

            if(this.addedItem == 0 && this.firstDisabled) return

            this.$emit('input', this.addedItem)
            this.$emit('selected')
        },
        prevItem() {
            if(!this.items.length) return

            let i = this.searchedItems.map(itm => itm[this.returns]).indexOf(this.selectedItem)

            if(i == 0) {
                if(this.firstDisabled) this.selectedItem = this.searchedItems[this.searchedItems.length - 1][this.returns]
                else this.selectedItem = 0
            } else if(this.selectedItem == 0) this.selectedItem = this.searchedItems[this.searchedItems.length - 1][this.returns]
            else this.selectedItem = this.searchedItems[i - 1][this.returns]
        },
        nextItem() {
            if(!this.items.length) return

            let i = this.searchedItems.map(itm => itm[this.returns]).indexOf(this.selectedItem)

            if(i == this.searchedItems.length - 1) {
                if(this.firstDisabled) this.selectedItem = this.searchedItems[0][this.returns]
                else this.selectedItem = 0
            }
            else this.selectedItem = this.searchedItems[i + 1][this.returns]
        },
        close() {
            this.$emit('close ')
        },
        formOptionText(item) {
            let j = []
            let s = this.shows.split('|')
            s.forEach(x => j.push(item[x]))

            return j.join(' | ')
        },
        getCount() {
            return this.firstDisabled ? this.searchedItems.length : this.searchedItems.length + 1
        },
        manualChange() {
            this.addedItem = this.selectedItem
            this.$emit('input', this.addedItem)
        }
    }
};

</script>

<style lang="scss" scoped>

.input-group{
    border: 1px solid #ced4da;
    border: solid 1px rgba(19, 158, 202, 0.3);
    background-color: var(--white-three);
    border-radius: 10px;
    .form-control{
        border: 0px !important;
        border-radius: 10px;
        padding: 0rem 0.75rem;
        font-size: 14px;
        direction: rtl;
    }
}

.btn-primary{
    background-color: #fff !important;
    border-left: 1px solid rgba(19, 158, 202, 0.3) !important;
    height: 80%;
    border-radius:0px !important;
    margin: 0px 2px;
    display: flex !important;
    align-items: center !important;
    padding: 0.375rem 0.61rem !important;
    img{
        width: 24px !important;
        height: 24px !important;
    }
}

.input-group-append{
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10px;
    border-radius: 0 10px 10px 0;
    background-color: #fff !important;
    height: 40px;
}

.input-group {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 100%;
}
.col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
}
.input-group-prepend {
    margin-right: -1px;
}
.input-group-prepend, .input-group-append {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.input-group > .input-group-prepend > .btn, .input-group > .input-group-prepend > .input-group-text, .input-group > .input-group-append:not(:last-child) > .btn, .input-group > .input-group-append:not(:last-child) > .input-group-text, .input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle), .input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.input-group-text {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0.375rem 0.75rem;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    text-align: center;
    white-space: nowrap;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
}

.input-group > .form-control:not(:first-child), .input-group > .custom-select:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.input-group > .form-control:not(:last-child), .input-group > .custom-select:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.input-group > .form-control, .input-group > .custom-select, .input-group > .custom-file {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0;
}
.form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.input-group-append {
    margin-left: -1px;
}
.input-group-prepend, .input-group-append {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
.input-group-prepend .btn, .input-group-append .btn {
    position: relative;
    z-index: 2;
}
.btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}
.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
button, html [type="button"], [type="reset"], [type="submit"] {
    -webkit-appearance: button;
}
button, select {
    text-transform: none;
}
button, input {
    overflow: visible;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.fa-chevron-right:before {
    content: "\f054";
}
.fa-search:before {
    content: "\f002";
}
</style>