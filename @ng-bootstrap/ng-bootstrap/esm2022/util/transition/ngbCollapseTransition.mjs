import { reflow } from '../util';
function measureCollapsingElementDimensionPx(element, dimension) {
    // SSR fix for without injecting the PlatformId
    if (typeof navigator === 'undefined') {
        return '0px';
    }
    const { classList } = element;
    const hasShownClass = classList.contains('show');
    if (!hasShownClass) {
        classList.add('show');
    }
    element.style[dimension] = '';
    const dimensionSize = element.getBoundingClientRect()[dimension] + 'px';
    if (!hasShownClass) {
        classList.remove('show');
    }
    return dimensionSize;
}
export const ngbCollapsingTransition = (element, animation, context) => {
    let { direction, maxSize, dimension } = context;
    const { classList } = element;
    function setInitialClasses() {
        classList.add('collapse');
        if (direction === 'show') {
            classList.add('show');
        }
        else {
            classList.remove('show');
        }
    }
    // without animations we just need to set initial classes
    if (!animation) {
        setInitialClasses();
        return;
    }
    // No maxHeight -> running the transition for the first time
    if (!maxSize) {
        maxSize = measureCollapsingElementDimensionPx(element, dimension);
        context.maxSize = maxSize;
        // Fix the height before starting the animation
        element.style[dimension] = direction !== 'show' ? maxSize : '0px';
        classList.remove('collapse', 'collapsing', 'show');
        reflow(element);
        // Start the animation
        classList.add('collapsing');
    }
    // Start or revert the animation
    element.style[dimension] = direction === 'show' ? maxSize : '0px';
    return () => {
        setInitialClasses();
        classList.remove('collapsing');
        element.style[dimension] = '';
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiQ29sbGFwc2VUcmFuc2l0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3V0aWwvdHJhbnNpdGlvbi9uZ2JDb2xsYXBzZVRyYW5zaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQVFqQyxTQUFTLG1DQUFtQyxDQUFDLE9BQW9CLEVBQUUsU0FBNkI7SUFDL0YsK0NBQStDO0lBQy9DLElBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxFQUFFLENBQUM7UUFDdEMsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBRUQsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLE9BQU8sQ0FBQztJQUM5QixNQUFNLGFBQWEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNwQixTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM5QixNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7SUFFeEUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3BCLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELE9BQU8sYUFBYSxDQUFDO0FBQ3RCLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBeUMsQ0FDNUUsT0FBb0IsRUFDcEIsU0FBa0IsRUFDbEIsT0FBdUIsRUFDdEIsRUFBRTtJQUNILElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLE9BQU8sQ0FBQztJQUNoRCxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsT0FBTyxDQUFDO0lBRTlCLFNBQVMsaUJBQWlCO1FBQ3pCLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUIsSUFBSSxTQUFTLEtBQUssTUFBTSxFQUFFLENBQUM7WUFDMUIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QixDQUFDO2FBQU0sQ0FBQztZQUNQLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsQ0FBQztJQUNGLENBQUM7SUFFRCx5REFBeUQ7SUFDekQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLGlCQUFpQixFQUFFLENBQUM7UUFDcEIsT0FBTztJQUNSLENBQUM7SUFFRCw0REFBNEQ7SUFDNUQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2QsT0FBTyxHQUFHLG1DQUFtQyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUUxQiwrQ0FBK0M7UUFDL0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUVsRSxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWhCLHNCQUFzQjtRQUN0QixTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxnQ0FBZ0M7SUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUVsRSxPQUFPLEdBQUcsRUFBRTtRQUNYLGlCQUFpQixFQUFFLENBQUM7UUFDcEIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMvQixDQUFDLENBQUM7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ2JUcmFuc2l0aW9uU3RhcnRGbiB9IGZyb20gJy4vbmdiVHJhbnNpdGlvbic7XG5pbXBvcnQgeyByZWZsb3cgfSBmcm9tICcuLi91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBOZ2JDb2xsYXBzZUN0eCB7XG5cdGRpcmVjdGlvbjogJ3Nob3cnIHwgJ2hpZGUnO1xuXHRkaW1lbnNpb246ICd3aWR0aCcgfCAnaGVpZ2h0Jztcblx0bWF4U2l6ZT86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gbWVhc3VyZUNvbGxhcHNpbmdFbGVtZW50RGltZW5zaW9uUHgoZWxlbWVudDogSFRNTEVsZW1lbnQsIGRpbWVuc2lvbjogJ3dpZHRoJyB8ICdoZWlnaHQnKTogc3RyaW5nIHtcblx0Ly8gU1NSIGZpeCBmb3Igd2l0aG91dCBpbmplY3RpbmcgdGhlIFBsYXRmb3JtSWRcblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuICcwcHgnO1xuXHR9XG5cblx0Y29uc3QgeyBjbGFzc0xpc3QgfSA9IGVsZW1lbnQ7XG5cdGNvbnN0IGhhc1Nob3duQ2xhc3MgPSBjbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKTtcblx0aWYgKCFoYXNTaG93bkNsYXNzKSB7XG5cdFx0Y2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuXHR9XG5cblx0ZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJyc7XG5cdGNvbnN0IGRpbWVuc2lvblNpemUgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbWVuc2lvbl0gKyAncHgnO1xuXG5cdGlmICghaGFzU2hvd25DbGFzcykge1xuXHRcdGNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcblx0fVxuXG5cdHJldHVybiBkaW1lbnNpb25TaXplO1xufVxuXG5leHBvcnQgY29uc3QgbmdiQ29sbGFwc2luZ1RyYW5zaXRpb246IE5nYlRyYW5zaXRpb25TdGFydEZuPE5nYkNvbGxhcHNlQ3R4PiA9IChcblx0ZWxlbWVudDogSFRNTEVsZW1lbnQsXG5cdGFuaW1hdGlvbjogYm9vbGVhbixcblx0Y29udGV4dDogTmdiQ29sbGFwc2VDdHgsXG4pID0+IHtcblx0bGV0IHsgZGlyZWN0aW9uLCBtYXhTaXplLCBkaW1lbnNpb24gfSA9IGNvbnRleHQ7XG5cdGNvbnN0IHsgY2xhc3NMaXN0IH0gPSBlbGVtZW50O1xuXG5cdGZ1bmN0aW9uIHNldEluaXRpYWxDbGFzc2VzKCkge1xuXHRcdGNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJyk7XG5cdFx0aWYgKGRpcmVjdGlvbiA9PT0gJ3Nob3cnKSB7XG5cdFx0XHRjbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcblx0XHR9XG5cdH1cblxuXHQvLyB3aXRob3V0IGFuaW1hdGlvbnMgd2UganVzdCBuZWVkIHRvIHNldCBpbml0aWFsIGNsYXNzZXNcblx0aWYgKCFhbmltYXRpb24pIHtcblx0XHRzZXRJbml0aWFsQ2xhc3NlcygpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIE5vIG1heEhlaWdodCAtPiBydW5uaW5nIHRoZSB0cmFuc2l0aW9uIGZvciB0aGUgZmlyc3QgdGltZVxuXHRpZiAoIW1heFNpemUpIHtcblx0XHRtYXhTaXplID0gbWVhc3VyZUNvbGxhcHNpbmdFbGVtZW50RGltZW5zaW9uUHgoZWxlbWVudCwgZGltZW5zaW9uKTtcblx0XHRjb250ZXh0Lm1heFNpemUgPSBtYXhTaXplO1xuXG5cdFx0Ly8gRml4IHRoZSBoZWlnaHQgYmVmb3JlIHN0YXJ0aW5nIHRoZSBhbmltYXRpb25cblx0XHRlbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBkaXJlY3Rpb24gIT09ICdzaG93JyA/IG1heFNpemUgOiAnMHB4JztcblxuXHRcdGNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNlJywgJ2NvbGxhcHNpbmcnLCAnc2hvdycpO1xuXG5cdFx0cmVmbG93KGVsZW1lbnQpO1xuXG5cdFx0Ly8gU3RhcnQgdGhlIGFuaW1hdGlvblxuXHRcdGNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNpbmcnKTtcblx0fVxuXG5cdC8vIFN0YXJ0IG9yIHJldmVydCB0aGUgYW5pbWF0aW9uXG5cdGVsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGRpcmVjdGlvbiA9PT0gJ3Nob3cnID8gbWF4U2l6ZSA6ICcwcHgnO1xuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0c2V0SW5pdGlhbENsYXNzZXMoKTtcblx0XHRjbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzaW5nJyk7XG5cdFx0ZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJyc7XG5cdH07XG59O1xuIl19