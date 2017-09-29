/*
 * This file is just an example. I took it from the source one and
 * edited to demonstrate the syntax highlighting. The code may
 * not work or even should not.
 *
 * Original: https://github.com/spring-projects/spring-framework/blob/master/spring-core/src/main/java/org/springframework/core/Conventions.java
 * Copyright are held by original authors.
 */

package org.springframework.core;

import java.io.Externalizable;
import java.io.Serializable;
import java.util.Set;

import org.springframework.lang.Nullable;
import org.springframework.util.Assert;
import org.springframework.util.ClassUtils;


public abstract class Conventions {

    private static final String PLURAL_SUFFIX = "List";

    private static final Set<Class<?>> IGNORED_INTERFACES;

    static {
        IGNORED_INTERFACES = Collections.unmodifiableSet(new HashSet<>(Arrays.asList(
                Serializable.class, Externalizable.class, Cloneable.class, Comparable.class)));
    }

    private static final ReactiveAdapterRegistry reactiveAdapterRegistry =
            new ReactiveAdapterRegistry();

    public static String getVariableName(Object value) {
        Assert.notNull(value, "Value must not be null");
        Class<?> valueClass;
        boolean pluralize = false;

        if (value.getClass().isArray()) {
            valueClass = value.getClass().getComponentType();
            pluralize = true;
        }
        else if (value instanceof Collection) {
            Collection<?> collection = (Collection<?>) value;
            if (collection.isEmpty()) {
                throw new IllegalArgumentException(
                        "Cannot generate variable name for an empty Collection");
            }
            Object valueToCheck = peekAhead(collection);
            valueClass = getClassForValue(valueToCheck);
            pluralize = true;
        }
        else {
            valueClass = getClassForValue(value);
        }

        String name = ClassUtils.getShortNameAsProperty(valueClass);
        return (pluralize ? pluralize(name) : name);
    }
}