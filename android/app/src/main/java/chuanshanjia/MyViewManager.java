package chuanshanjia;

import android.view.View;

import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentActivity;
import androidx.fragment.app.FragmentManager;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class MyViewManager extends SimpleViewManager<View> {
    private static final String REACT_CLASS = "MyFragment";
    @NonNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @NonNull
    @Override
    protected View createViewInstance(@NonNull ThemedReactContext reactContext) {
        FragmentManager fragmentManager =((FragmentActivity) reactContext.getCurrentActivity()).getSupportFragmentManager();
        MyFragment myFragment = new MyFragment();
        fragmentManager.beginTransaction().replace(android.R.id.content, myFragment).commit();
        return new View(reactContext); // 这里返回一个空的View，因为Fragment已经被添加到Activity中\
    }
}
