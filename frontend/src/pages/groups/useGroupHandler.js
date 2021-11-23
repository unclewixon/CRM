import { ref, watch } from '@vue/composition-api'
// import store from '@/store'

export default function useGroupHandler(props, emit) {
  // ------------------------------------------------
  // group
  // ------------------------------------------------
  const groupItem = ref(JSON.parse(JSON.stringify(props.group.value)))
  const resetGroup = () => {
    groupItem.value = JSON.parse(JSON.stringify(props.group.value))
  }
  watch(props.group, () => {
    resetGroup()
  })

  // ------------------------------------------------
  // isEventHandlerSidebarActive
  // * Clear form if sidebar is closed
  // ! We can hide it using @hidden event
  // ------------------------------------------------
  // watch(props.isEventHandlerSidebarActive, val => {
  //   // ? Don't reset event till transition is finished
  //   if (!val) {
  //     setTimeout(() => {
  //       clearForm.value()
  //     }, 350)
  //   }
  // })

  const onSubmit = () => {
    const groupData = JSON.parse(JSON.stringify(groupItem))

    // * If event has id => Edit Event
    // Emit event for add/update event
    if (props.group.value.id) emit('update-group', groupData.value)
    else emit('add-group', groupData.value)
  }

  return {
    groupItem,
    resetGroup,
    onSubmit,
  }
}
